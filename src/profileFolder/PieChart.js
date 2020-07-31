import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'
class PieChart extends Component {

    state = {
        labels: ['Calories from Fat', 'Calories from Protein', 'Calories from Carbs'],
        datasets: [
            {
                label: "Calories",
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000'
                ],
                data: [this.props.calFromFat, this.props.calFromProt, this.props.calFromCarbs]
            }
        ]
    }

    render() {

        return (
            <div>
                <h3 id='chart-title' >Source of Calories</h3>
                <Pie
                    data={this.state}
                    options={{
                        title: {
                            display: true,
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        )
    }
}

export default PieChart