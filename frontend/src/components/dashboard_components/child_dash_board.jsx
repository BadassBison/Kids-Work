import React from 'react';
import ChildIndexHeaderContainer from '../child_index/child_index_header_container';
import { Chart } from 'react-chartjs-2';
import './child_dash_board.css';

class ChildDashBoard extends React.Component {
    constructor(props) {
        super(props);

        this.setGraphs = this.setGraphs.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.props.fetchChildChores(this.props.currentUser.childId);
    }
    
    componentDidUpdate() {
        this.setGraphs();
    }

    getData() {
        const childId = this.props.currentUser.childId;
        const data = this.props.data[childId];
        return [data.Completed, data.Open, data.Pending, data.Overdue];
    }

    setGraphs() {
        let one = 'bar';
        // let two = 'line';
        let three = 'pie';

        let ctx1 = document.getElementById('myChart1');
        let myChart1 = new Chart(ctx1, {
            type: one,
            data: {
                labels: ['Completed', 'Assigned', 'Pending', 'Overdue'],
                datasets: [{
                    label: 'Chores',
                    data: this.getData(),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        // LINE GRAPH FEATURE WILL COME IN THE FUTURE
        // let ctx2 = document.getElementById('myChart2');
        // let myChart2 = new Chart(ctx2, {
        //     type: two,
        //     data: {
        //         labels: ['Completed', 'Assigned', 'Pending', 'Overdue'],
        //         datasets: [{
        //             label: 'Chores',
        //             data: this.getData(),
        //             backgroundColor: [
        //                 'rgba(255, 99, 132, 0.2)',
        //                 'rgba(54, 162, 235, 0.2)',
        //                 'rgba(255, 206, 86, 0.2)',
        //                 'rgba(75, 192, 192, 0.2)',
        //             ],
        //             borderColor: [
        //                 'rgba(255, 99, 132, 1)',
        //                 'rgba(54, 162, 235, 1)',
        //                 'rgba(255, 206, 86, 1)',
        //                 'rgba(75, 192, 192, 1)',
        //             ],
        //             borderWidth: 1
        //         }]
        //     },
        //     options: {
        //         scales: {
        //             yAxes: [{
        //                 ticks: {
        //                     beginAtZero: true
        //                 }
        //             }]
        //         }
        //     }
        // });
        let ctx3 = document.getElementById('myChart3');
        let myChart3 = new Chart(ctx3, {
            type: three,
            data: {
                labels: ['Completed', 'Assigned', 'Pending', 'Overdue'],
                datasets: [{
                    label: 'Chores',
                    data: this.getData(),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

    render() {
        return (
            <div className="dashboard-body-container">
                <main >
                    <header className="dashboard-header">
                        <ChildIndexHeaderContainer />
                    </header>

                    <section className="dashboard-graphs-container">
                        <div className="graph-item">
                            <canvas id="myChart1" width="400" height="400"></canvas>
                        </div>
                        {/* <div className="graph-item">
                            <canvas id="myChart2" width="400" height="400"></canvas>
                        </div> */}
                        <div className="graph-item">
                            <canvas id="myChart3" width="400" height="400"></canvas>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default ChildDashBoard;