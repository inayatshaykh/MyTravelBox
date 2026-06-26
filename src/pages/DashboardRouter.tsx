import { useAuth } from '../context/AuthContext'
import DirectorDashboard from './dashboards/DirectorDashboard'
import BranchManagerDashboard from './dashboards/BranchManagerDashboard'
import OperationsDashboard from './dashboards/OperationsDashboard'
import SalesDashboard from './dashboards/SalesDashboard'
import VisaDashboard from './dashboards/VisaDashboard'
import AccountsDashboard from './dashboards/AccountsDashboard'
import TourManagerDashboard from './dashboards/TourManagerDashboard'
import ParentDashboard from './ParentDashboard'

/**
 * Routes the logged-in user to their role-specific dashboard.
 * Parent role always uses ParentDashboard with the sidebar.
 */
export default function DashboardRouter() {
  const { user } = useAuth()

  switch (user?.role) {
    case 'director':       return <DirectorDashboard />
    case 'branch_manager': return <BranchManagerDashboard />
    case 'operations':     return <OperationsDashboard />
    case 'sales':          return <SalesDashboard />
    case 'visa_team':      return <VisaDashboard />
    case 'accounts':       return <AccountsDashboard />
    case 'tour_manager':   return <TourManagerDashboard />
    case 'parent':         return <ParentDashboard />
    default:               return <ParentDashboard />
  }
}
