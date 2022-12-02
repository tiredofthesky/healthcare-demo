import './App.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Dashone from './components/dashboardthree/dashboardthree';
import Dashtwo from './components/dashboardtwo/dashboardtwo';
import Dashthree from './components/dashboardthree/dashboardthree';

function App({options}) {
    return (
    <div className = "App" >
        <HighchartsReact highcharts={Highcharts} options={options} />;
        <Dashone/>
        <Dashtwo/>
        <Dashthree/>
    </div >
  );
};

export default App;