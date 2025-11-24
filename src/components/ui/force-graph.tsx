import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { select, type Selection } from "d3-selection";
import {
  forceSimulation,
  forceLink,
  forceManyBody,
  forceCenter,
} from "d3-force";
import { drag as d3Drag, type D3DragEvent } from "d3-drag";
import type { GraphData, NodeDatum, LinkDatum } from "@/types/force-graph";

const BASE_NODE_RADIUS = 20;
const LABEL_VERTICAL_OFFSET = 20;
const FORCE_CHARGE_STRENGTH = -400;
const FORCE_LINK_DISTANCE = 80;
const NODE_COLORS = [
  "var(--color-muted)",
  "var(--color-warm)",
  "var(--color-cool)",
  "var(--color-success)",
  "var(--color-danger)",
  "var(--color-secondary)",
] as const;
const DEFAULT_NODE_COLOR = NODE_COLORS[0];

type ForceGraphProps = {
  data: GraphData;
  width: number;
  height: number;
};

export default function ForceGraph({ data, width, height }: ForceGraphProps) {
  const navigate = useNavigate();
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const nodes: NodeDatum[] = data.nodes.map((node) => ({ ...node }));
    const links: LinkDatum[] = data.links.map((linkItem) => ({ ...linkItem }));

    const groupColor = new Map<string | number, string>();
    let colorRotationIndex = 0;

    const getColorForGroup = (group: NodeDatum["group"]) => {
      if (group === undefined || group === null) {
        return DEFAULT_NODE_COLOR;
      }
      if (!groupColor.has(group)) {
        const assignedColor =
          NODE_COLORS[colorRotationIndex % NODE_COLORS.length] ?? "";
        groupColor.set(group, assignedColor);
        colorRotationIndex += 1;
      }
      return groupColor.get(group) ?? DEFAULT_NODE_COLOR;
    };

    const svg = select(svgRef.current);
    svg.selectAll("*").remove();

    const simulation = forceSimulation(nodes)
      .force(
        "link",
        forceLink<NodeDatum, LinkDatum>(links)
          .id((d: NodeDatum) => d.id)
          .distance(FORCE_LINK_DISTANCE)
      )
      .force("charge", forceManyBody().strength(FORCE_CHARGE_STRENGTH))
      .force("center", forceCenter(width / 2, height / 2));

    const link = svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("stroke", "var(--color-muted)")
      .attr("stroke-opacity", 0.6)
      .selectAll<SVGLineElement, LinkDatum>("line")
      .data(links)
      .join("line")
      .attr("stroke-width", 1.5);

    const node = svg
      .append("g")
      .attr("stroke", "var(--color-surface)")
      .attr("stroke-width", 1.5)
      .selectAll<SVGCircleElement, NodeDatum>("circle")
      .data(nodes)
      .join("circle")
      .attr("cursor", "pointer")
      .attr("r", (d: NodeDatum) =>
        d.size ? d.size * BASE_NODE_RADIUS : BASE_NODE_RADIUS
      )
      .attr("fill", (d: NodeDatum) => getColorForGroup(d.group));

    type NodeSelection = Selection<
      SVGCircleElement,
      NodeDatum,
      SVGGElement,
      unknown
    >;
    const typedNode = node as NodeSelection;

    typedNode.call(
      d3Drag<SVGCircleElement, NodeDatum>()
        .on(
          "start",
          (
            event: D3DragEvent<SVGCircleElement, NodeDatum, NodeDatum>,
            datum: NodeDatum
          ) => dragStarted(event, datum)
        )
        .on(
          "drag",
          (
            event: D3DragEvent<SVGCircleElement, NodeDatum, NodeDatum>,
            datum: NodeDatum
          ) => dragging(event, datum)
        )
        .on(
          "end",
          (
            event: D3DragEvent<SVGCircleElement, NodeDatum, NodeDatum>,
            datum: NodeDatum
          ) => dragEnded(event, datum)
        )
    );

    const labelGroup = svg
      .append("g")
      .attr("class", "labels")
      .selectAll<SVGGElement, NodeDatum>("g")
      .data(nodes)
      .join("g");

    labelGroup
      .append("rect")
      .attr("fill", "var(--color-surface)")
      .attr("stroke", "var(--color-muted)")
      .attr("rx", 2)
      .attr("ry", 2);

    labelGroup
      .append("text")
      .text((d: NodeDatum) => d.label ?? "")
      .attr("font-size", 15)
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em");

    simulation.on("tick", () => {
      ticked();

      labelGroup.attr(
        "transform",
        (d: NodeDatum) =>
          `translate(${d.x ?? 0},${(d.y ?? 0) + LABEL_VERTICAL_OFFSET})`
      );

      labelGroup
        .selectAll<SVGRectElement, NodeDatum>("rect")
        .each(function eachLabelRect(this: SVGRectElement, _d: NodeDatum) {
          const rect = this;
          const textEl =
            rect.parentElement?.querySelector<SVGTextElement>("text");
          if (!textEl) return;
          const { width, height } = textEl.getBBox();

          select(rect)
            .attr("x", -width / 2 - 4)
            .attr("y", -height / 2 - 2)
            .attr("width", width + 8)
            .attr("height", height + 4);
        });
    });

    typedNode.on("click", (event: MouseEvent, node: NodeDatum) => {
      event.preventDefault();
      navigate(node.href ?? "/");
    });

    typedNode.append("title").text((d: NodeDatum) => d.id);

    function ticked() {
      link
        .attr("x1", (d: LinkDatum) =>
          typeof d.source === "object" ? (d.source.x ?? 0) : 0
        )
        .attr("y1", (d: LinkDatum) =>
          typeof d.source === "object" ? (d.source.y ?? 0) : 0
        )
        .attr("x2", (d: LinkDatum) =>
          typeof d.target === "object" ? (d.target.x ?? 0) : 0
        )
        .attr("y2", (d: LinkDatum) =>
          typeof d.target === "object" ? (d.target.y ?? 0) : 0
        );
      typedNode
        .attr("cx", (d: NodeDatum) => d.x ?? 0)
        .attr("cy", (d: NodeDatum) => d.y ?? 0);
    }

    function dragStarted(
      event: D3DragEvent<SVGCircleElement, NodeDatum, NodeDatum>,
      node: NodeDatum
    ) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      node.fx = node.x;
      node.fy = node.y;
    }

    function dragging(
      event: D3DragEvent<SVGCircleElement, NodeDatum, NodeDatum>,
      node: NodeDatum
    ) {
      node.fx = event.x;
      node.fy = event.y;
    }

    function dragEnded(
      event: D3DragEvent<SVGCircleElement, NodeDatum, NodeDatum>,
      node: NodeDatum
    ) {
      if (!event.active) simulation.alphaTarget(0);
      node.fx = null;
      node.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, [data, height, width]);

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    />
  );
}
