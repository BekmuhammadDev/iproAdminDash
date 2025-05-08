import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import WorkIcon from '@mui/icons-material/Work';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import DashboardContent from './pages/dashboard';
import OrdersPage from './pages/orders';
import UserDetailsPage from './pages/userdetail';
import UserPage from "./pages/user"
import HelpPage from './pages/help';
import CareersPage from './pages/careers';
import ServicesPage from './pages/service';
import OrderDetailsPage from './pages/orderdetail';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'user',
    title: 'User',
    icon: <PersonIcon />,
  },
  {
    segment: 'help',
    title: 'Help',
    icon: <CallIcon />,
  },
  {
    segment: 'careers',
    title: 'Careers',
    icon: <WorkIcon />,
  },
  {
    segment: 'service',
    title: 'Service',
    icon: <DesignServicesIcon />,
  },

];

const demoTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Simple router logic
function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

function RenderPage({ path, router }) {
  const segments = path.split('/').filter(Boolean);
  const main = segments[0] || 'dashboard';
  const sub = segments[1];

  switch (main) {
    case 'orders':
      return sub ? (
        <OrderDetailsPage orderId={sub} router={router} />
      ) : (
        <OrdersPage router={router} />
      );
    case 'user':
      return sub ? (
        <UserDetailsPage userId={sub} router={router} />
      ) : (
        <UserPage router={router} />
      )
    case 'help':
      return <HelpPage />;
    case 'careers':
      return <CareersPage />;
    case 'service':
      return <ServicesPage />;
    case 'dashboard':
    default:
      return <DashboardContent />;
  }
}



// Main component
export default function DashboardLayoutBasic(props) {
  const { window } = props;
  const router = useDemoRouter('/dashboard');
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
          <RenderPage path={router.pathname} router={router} />

        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
