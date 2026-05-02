import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { ConfigProvider, useConfig } from './context/ConfigContext';
import HomePage from './pages/HomePage';
import AdminPanel from './pages/AdminPanel';
import { getCityNameBySlug } from './data/constants';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoggedIn } = useConfig();
  if (!isLoggedIn) return <Navigate to="/painel/login" replace />;
  return <>{children}</>;
};

// Wrapper para capturar parâmetros de cidade nas rotas
const CityServiceRoute: React.FC<{ serviceType?: string }> = ({ serviceType }) => {
  const { city } = useParams<{ city: string }>();
  const cityName = city ? getCityNameBySlug(city) : undefined;

  return <HomePage city={cityName} serviceType={serviceType} />;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Rotas por cidade */}
      <Route path="/servicos-florianopolis" element={<HomePage city="Florianópolis" />} />
      <Route path="/servicos-sao-jose" element={<HomePage city="São José" />} />
      <Route path="/servicos-palhoca" element={<HomePage city="Palhoça" />} />
      <Route path="/servicos-biguacu" element={<HomePage city="Biguaçu" />} />
      {/* Rotas por serviço e cidade */}
      <Route path="/limpeza/:city" element={<CityServiceRoute serviceType="Limpeza" />} />
      <Route path="/copeira/:city" element={<CityServiceRoute serviceType="Copeira" />} />
      <Route path="/portaria/:city" element={<CityServiceRoute serviceType="Portaria" />} />
      <Route path="/garcao/:city" element={<CityServiceRoute serviceType="Garçom" />} />
      {/* Redirecionamentos das rotas antigas */}
      <Route path="/limpeza-florianopolis" element={<Navigate to="/limpeza/florianopolis" replace />} />
      <Route path="/limpeza-sao-jose" element={<Navigate to="/limpeza/sao-jose" replace />} />
      <Route path="/limpeza-palhoca" element={<Navigate to="/limpeza/palhoca" replace />} />
      <Route path="/limpeza-biguacu" element={<Navigate to="/limpeza/biguacu" replace />} />
      <Route path="/painel/login" element={<AdminPanel isLogin />} />
      <Route
        path="/painel"
        element={
          <ProtectedRoute>
            <AdminPanel />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <ConfigProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ConfigProvider>
  );
}
