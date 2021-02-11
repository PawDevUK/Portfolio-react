import { ResponsiveBar } from '@nivo/bar'
import React from 'react'

export const Chart = ({ data }) => (
    <ResponsiveBar
    data={data}
    keys={[ 'active cases', 'new cases', 'new deaths' ]}
    indexBy="id"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0}
    groupMode="grouped"
    layout="horizontal"
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'accent' }}
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ]}
    fill={[
        {
            match: {
                id: 'fries'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'sandwich'
            },
            id: 'lines'
        }
    ]}
    borderRadius={4}
    borderColor={{ from: 'color', modifiers: [ [ 'darker', '1.3' ] ] }}
    axisTop={{ tickSize: 6, tickPadding: 8, tickRotation: 42, legend: '', legendOffset: 27 }}
    axisRight={null}
    enableGridX={true}
    labelSkipWidth={17}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
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
    animate={true}
    motionStiffness={85}
    motionDamping={15}
/>
)
