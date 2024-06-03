"use client"
import React, { useCallback } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background,
} from 'reactflow';

import DownloadButton from './download-button';
import CustomNode from './custom-node';
import { initialNodes, initialEdges } from './nodes-edges';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import 'reactflow/dist/style.css';

// @todo how to handle this?
// import './index.css';

const connectionLineStyle = { stroke: '#ffff' };
const snapGrid = [25, 25];
const nodeTypes = {
  custom: CustomNode,
};

const defaultEdgeOptions = {
  animated: true,
  type: 'smoothstep',
};

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const DownloadImageFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Horizontal Flow</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='w-full h-[calc(100vh-280px)]'>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            connectionLineStyle={connectionLineStyle}
            connectionLineType="smoothstep"
            snapToGrid={true}
            snapGrid={snapGrid}
            defaultViewport={defaultViewport}
            fitView
            attributionPosition="bottom-left"
            defaultEdgeOptions={defaultEdgeOptions}
            className="download-image"
          >
            <Controls />
            <Background gap={25} />
            <DownloadButton />
          </ReactFlow>
        </div>
      </CardContent>
    </Card>
  );
};

export default DownloadImageFlow;
