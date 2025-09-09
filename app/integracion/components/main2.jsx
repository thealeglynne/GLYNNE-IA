'use client';

import { motion } from 'framer-motion';
import {
  Handle,
  Position,
  ReactFlowProvider,
  ReactFlow,
  Background,
} from 'reactflow';
import 'reactflow/dist/style.css';
import {
  FaEnvelope,
  FaUsers,
  FaRobot,
  FaChartBar,
  FaCog,
  FaLaptopCode,
  FaWarehouse,
  FaCheckCircle,
  FaBrain,
  FaCalendarAlt,
} from 'react-icons/fa';

const NODE_TYPES = {
  default: ({ data }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white border border-gray-300 rounded-lg shadow-lg px-3 py-2 text-[10px] sm:text-xs min-w-[140px] sm:min-w-[180px] max-w-xs pointer-events-auto"
    >
      <Handle type="target" position={Position.Left} className="bg-orange-500 w-2 h-2" />
      <div className="flex items-center gap-1 sm:gap-2 mb-1">
        <data.icon className="text-orange-500 text-sm sm:text-base" />
        <strong className="text-[11px] sm:text-[13px]">{data.label}</strong>
      </div>
      <p className="text-gray-600 text-[9px] sm:text-[11px] leading-tight">{data.description}</p>
      <Handle type="source" position={Position.Right} className="bg-orange-500 w-2 h-2" />
    </motion.div>
  ),
};

// === SEO OPTIMIZADO ===
const nodes = [
  { id: '1', type: 'default', position: { x: 0, y: 50 }, data: { label: 'Recepción de Leads Multicanal', icon: FaEnvelope, description: 'Captura automática desde formularios web, WhatsApp y correos electrónicos.' } },
  { id: '2', type: 'default', position: { x: 250, y: 50 }, data: { label: 'CRM Inteligente con IA', icon: FaUsers, description: 'Clasifica, prioriza y nutre leads con segmentación predictiva.' } },
  { id: '3', type: 'default', position: { x: 500, y: 50 }, data: { label: 'Agente Comercial Autónomo', icon: FaRobot, description: 'Responde en tiempo real, agenda citas y cierra ventas con IA conversacional.' } },
  { id: '4', type: 'default', position: { x: 750, y: 50 }, data: { label: 'Ventas Predictivas', icon: FaChartBar, description: 'Predicción de cierres, análisis de embudo y forecasting con IA.' } },
  { id: '5', type: 'default', position: { x: 1000, y: 50 }, data: { label: 'Automatización Operativa Empresarial', icon: FaCog, description: 'Optimiza procesos de RRHH, Finanzas y Legal con bots inteligentes.' } },
  { id: '6', type: 'default', position: { x: 500, y: 200 }, data: { label: 'Orquestador Central IA', icon: FaBrain, description: 'Control y coordinación de todos los procesos inteligentes desde un solo panel.' } },
  { id: '7', type: 'default', position: { x: 750, y: 200 }, data: { label: 'Integración vía API', icon: FaLaptopCode, description: 'Conecta sistemas clave como WhatsApp, Gmail, CRMs y ERPs sin fricción.' } },
  { id: '8', type: 'default', position: { x: 250, y: 200 }, data: { label: 'Gestión Logística Inteligente', icon: FaWarehouse, description: 'Automatización de pedidos, inventarios y rutas con IA predictiva.' } },
  { id: '9', type: 'default', position: { x: 0, y: 200 }, data: { label: 'Control de Calidad Automático', icon: FaCheckCircle, description: 'Auditorías y validación de procesos críticos en tiempo real.' } },
  { id: '10', type: 'default', position: { x: 1000, y: 200 }, data: { label: 'Gestión de Reuniones Inteligente', icon: FaCalendarAlt, description: 'Agenda automática, recordatorios inteligentes y resúmenes con IA.' } },
];

const edges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#fb923c' } },
  { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#fb923c' } },
  { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#fb923c' } },
  { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#fb923c' } },
  { id: 'e2-6', source: '2', target: '6', animated: true, style: { stroke: '#fb923c' } },
  { id: 'e6-7', source: '6', target: '7', animated: true, style: { stroke: '#fb923c' } },
  { id: 'e6-8', source: '6', target: '8', animated: true, style: { stroke: '#fb923c' } },
  { id: 'e6-9', source: '6', target: '9', animated: true, style: { stroke: '#fb923c' } },
  { id: 'e6-10', source: '6', target: '10', animated: true, style: { stroke: '#fb923c' } },
];

export default function EmpresaIAFlowStatic() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-12 px-4 bg-white gap-8">
      {/* Título y descripción optimizados */}
      <div className="max-w-5xl text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Arquitectura Empresarial con Inteligencia Artificial
        </h1>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Descubre cómo una <strong>arquitectura de IA empresarial</strong> orquesta procesos clave
          —desde la recepción de leads hasta la <strong>automatización operativa y la integración API</strong>—
          para escalar tu negocio con precisión, eficiencia y sin fricción.
        </p>
        <ul className="text-sm sm:text-base text-gray-600 leading-relaxed list-disc list-inside space-y-1">
          <li><strong>Integración de IA en CRM</strong> y automatización de ventas predictivas.</li>
          <li><strong>Agentes autónomos interdepartamentales</strong> que trabajan 24/7.</li>
          <li><strong>Orquestación inteligente</strong> de sistemas legacy, ERPs y plataformas cloud.</li>
          <li>Automatización logística, control de calidad y gestión de reuniones con IA.</li>
        </ul>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-4">
          Implementa esta arquitectura modular y escalable y potencia tu ROI en semanas.
        </p>
      </div>

      {/* Diagrama */}
      <div className="w-full overflow-x-auto">
        <div
          className="min-w-[1100px] h-[70vh] bg-white border border-gray-200 rounded-xl shadow-sm"
          style={{ pointerEvents: 'none' }}
        >
          <ReactFlowProvider>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={NODE_TYPES}
              fitView
              panOnScroll={false}
              zoomOnScroll={false}
              zoomOnPinch={false}
              panOnDrag={false}
              elementsSelectable={false}
              nodesDraggable={false}
              nodesConnectable={false}
              className="bg-white"
            >
              <Background color="#f3f4f6" gap={16} />
            </ReactFlow>
          </ReactFlowProvider>
        </div>
      </div>
    </div>
  );
}