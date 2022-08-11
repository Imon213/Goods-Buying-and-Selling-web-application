import ReactApexChart from "react-apexcharts";
import axios from "axios";
import { useEffect, useState } from "react";
import Style from './Style/Chart.module.css';

export default function Chart(){
    const [statusdata, setStatusData] = useState([]);
    useEffect(() => {
        //if (localStorage.getItem('user')){
        axios
          .get(`http://127.0.0.1:8000/api/order_status_details`)
          .then((resp) => {
            console.log(resp.data);
            setStatusData(resp.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      const state ={
          
      
       series: [statusdata.pending_percentage, statusdata.accept_percentage, statusdata.on_the_way_percentage, statusdata.delivered_percentage],
            options: {
              chart: {
                width: '100%',
                type: 'pie',
              },
              labels: [`PENDING ${statusdata.pending}`, `ACCEPT ${statusdata.accept}`, `ON THE WAY ${statusdata.on_the_way}`,`DELIVERED ${statusdata.delivered}`],
              theme: {
                monochrome: {
                  enabled: false
                }
              },
              plotOptions: {
                pie: {
                  dataLabels: {
                    offset: -5
                  }
                }
              },
              
              
              
            },
      
      };

    return(
      <>
      <h5 className={Style.title}>TOTAL ORDER: {statusdata.all_item}</h5>
      <ReactApexChart  options={state.options} series={state.series} type="donut" />
      </>
    );
}