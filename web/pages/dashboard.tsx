import Navbar from '../components/Dashboard/Navbar';
import Meta from 'partials/Meta';

const Dashboard = () => {
  return (
    <div className="">
      <Navbar />
      <Meta
        title="Hydralite"
        description="Hydralite is the new open source platform for project management and open source project discovery."
        url="https://hydralite.io"
        keywords="open source,hydralite,project management"
      />
    </div>
  );
};

export default Dashboard;
