import { ResponsiveBar } from '@nivo/bar'
import {CheckMax} from '../factory';
import React from 'react';

export function Chart({ data }){

    return(
        <ResponsiveBar
        enableGridX={true}
        data={data}
        keys={[ 'active cases', 'new cases', 'new deaths' ]}
        indexBy="id"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0}
        groupMode="grouped"
        layout="horizontal"
        colors={{ scheme: 'accent' }}
        borderRadius={4}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', '1.3' ] ] }}
        // axisTop={{ tickSize: 10, tickPadding: 8, tickRotation: 45, legend: '', legendOffset: 27 }}
         maxValue={CheckMax(data[0])}
        axisRight={null}
        labelSkipWidth={17}
        labelSkipHeight={12}
        innerPadding={6}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.8 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                    anchor: 'right',
                    direction: 'column',
                    justify: false,
                    translateX: 90,
                    translateY: 0,
                    itemWidth: 100,
                    itemHeight: 40,
                    itemsSpacing: 12,
                    symbolSize: 14,
                    itemDirection: 'right-to-left',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        motionStiffness={100}
        motionDamping={10}
        animate={true}
    />)

}

    
   
