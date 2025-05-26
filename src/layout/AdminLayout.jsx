import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import BuildIcon from '@mui/icons-material/Build'; // Service
import WorkIcon from '@mui/icons-material/Work'; // Portfolio
import SchoolIcon from '@mui/icons-material/School'; // Careers
import { createTheme } from '@mui/material/styles';
import PeopleIcon from '@mui/icons-material/People';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  BarChart as BarChartIcon,
  Description as DescriptionIcon,
  Layers as LayersIcon,
} from '@mui/icons-material';
import Notfound from '../components/Notfound';

const NAVIGATION = [
  { kind: 'header', title: 'Main items' },
  { segment: 'dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
  { segment: 'dashboard/order', title: 'Orders', icon: <ShoppingCartIcon /> },
  { segment: 'dashboard/service', title: 'Service', icon: <BuildIcon /> },
  { segment: 'dashboard/portfolio', title: 'Portfolio', icon: <WorkIcon /> },
  { segment: 'dashboard/careers', title: 'Careers', icon: <SchoolIcon /> },
  { segment: 'dashboard/user', title: 'Users', icon: <PeopleIcon /> },
  { segment: 'dashboard/help', title: 'Help', icon: <HelpOutlineIcon /> },

  { kind: 'divider' },
  { kind: 'header', title: 'Analytics' },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      { segment: 'sales', title: 'Sales', icon: <DescriptionIcon /> },
      { segment: 'traffic', title: 'Traffic', icon: <DescriptionIcon /> },
    ],
  },
  { segment: 'integrations', title: 'Integrations', icon: <LayersIcon /> },
];

const demoTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 },
  },
});

function useDemoRouter() {
  const location = useLocation();
  const navigate = useNavigate();

  return {
    pathname: location.pathname.replace(/^\//, ''), // 'order' yoki ''
    searchParams: new URLSearchParams(location.search),
    navigate: (path) => navigate(path), // Faqat path, '/' bilan emas!
  };
}

const AdminLayout = ({ window }) => {
  const router = useDemoRouter();
  const demoWindow = window ? window() : undefined;
  const token =sessionStorage.getItem("token")

  return (
    <>
    {!token?(
     <Notfound/>
    ):(


      <>
      <AppProvider navigation={NAVIGATION} router={router} theme={demoTheme} window={demoWindow}>
      <DashboardLayout>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
      </>
    )}
    </>
  );
};

export default AdminLayout;
