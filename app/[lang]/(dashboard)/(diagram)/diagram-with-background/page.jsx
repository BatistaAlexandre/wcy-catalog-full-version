"use client"
import { useState } from 'react';
import ReactFlow, { Background, Panel } from 'reactflow';
import 'reactflow/dist/style.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const defaultNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },
  {
    id: '2',
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
];
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];


function Flow() {
  const [variant, setVariant] = useState('cross');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Change Background</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='w-full h-[calc(100vh-220px)] overflow-x-auto'>
          <ReactFlow defaultNodes={defaultNodes} defaultEdges={initialEdges} fitView>
            <Background color="#ccc" variant={variant} />
            <Panel>
              <div className='text-sm font-medium text-default-900 mb-4'>Variant:</div>
              <div className="space-x-3 rtl:space-x-reverse">
                <Button onClick={() => setVariant('dots')} size="sm" className="rounded" variant="outline">Dots</Button>
                <Button onClick={() => setVariant('lines')} size="sm" className="rounded" variant="outline">Lines</Button>
                <Button onClick={() => setVariant('cross')} size="sm" className="rounded" variant="outline">Cross</Button>
              </div>
            </Panel>
          </ReactFlow>
        </div>
      </CardContent>
    </Card>
  );
}

export default Flow;
