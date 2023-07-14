import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {BarChart} from 'react-native-chart-kit';
import Chart from './Chart';

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
} from 'victory-native';

interface ChartData {
  labels: string[];
  datasets: {data: number[]}[];
}
const screenSize = Dimensions.get('window').width;
export default function HomeScreen() {
  const [timePeriod, setTimePeriod] = useState('daily');
  const [showDH, setShowDH] = useState(true);

  const data = [
    {x: 20, y: 0},
    {x: 15, y: 100},
    {x: 20, y: 200},
    {x: 25, y: 300},
    {x: 30, y: 400},
  ];

  const dailyData: ChartData = {
    labels: ['0', '15', '20', '25', '30'],
    datasets: [{data: [0, 100, 200, 300, 400]}],
  };

  const weeklyData: ChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{data: [0, 100, 200, 300, 400]}],
  };

  const monthlyData: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{data: [0, 100, 200, 300, 400]}],
  };

  const yearlyData: ChartData = {
    labels: ['2019', '2020', '2021', '2022'],
    datasets: [{data: [0, 100, 200, 300, 400]}],
  };

  const timePeriodData: {[key: string]: ChartData} = {
    daily: dailyData,
    weekly: weeklyData,
    monthly: monthlyData,
    yearly: yearlyData,
  };

  const handleTimePeriodChange = (period: string) => {
    setTimePeriod(period);
  };
  const handleToggleDH = () => {
    setShowDH(!showDH);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text style={styles.rateText}>$3544.61</Text>
          <Text style={styles.recentText}>Recent Invoice</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View style={styles.innerBody}>
          <View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.buttonTimePeriod,
                  timePeriod === 'daily' && styles.selectedButton,
                ]}
                onPress={() => handleTimePeriodChange('daily')}>
                <Text
                  style={[
                    styles.buttonTimePeriodText,
                    timePeriod === 'daily' && styles.selectedButtonText,
                  ]}>
                  Daily
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonTimePeriod,
                  timePeriod === 'weekly' && styles.selectedButton,
                ]}
                onPress={() => handleTimePeriodChange('weekly')}>
                <Text
                  style={[
                    styles.buttonTimePeriodText,
                    timePeriod === 'weekly' && styles.selectedButtonText,
                  ]}>
                  Weekly
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonTimePeriod,
                  timePeriod === 'monthly' && styles.selectedButton,
                ]}
                onPress={() => handleTimePeriodChange('monthly')}>
                <Text
                  style={[
                    styles.buttonTimePeriodText,
                    timePeriod === 'monthly' && styles.selectedButtonText,
                  ]}>
                  Monthly
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonTimePeriod,
                  timePeriod === 'yearly' && styles.selectedButton,
                ]}
                onPress={() => handleTimePeriodChange('yearly')}>
                <Text
                  style={[
                    styles.buttonTimePeriodText,
                    timePeriod === 'yearly' && styles.selectedButtonText,
                  ]}>
                  Yearly
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.rate}>$1600</Text>
            <View style={styles.chart}>
              <VictoryChart
                padding={{left: 50, right: 20, top: 20, bottom: 50}}
                height={250}
                width={screenSize}
                // height={50}

                domainPadding={24}
                theme={VictoryTheme.material}
                style={{}}>
                <VictoryAxis
                  style={{
                    axis: {stroke: '#333333', strokeWidth: 1},
                    tickLabels: {fontSize: 10, fontFamily: 'Poppins-Regular'},
                    ticks: {stroke: '#333333', size: 5},
                    grid: {stroke: 'transparent'},
                  }}
                  tickFormat={x => x}
                />
                <VictoryAxis
                  dependentAxis
                  style={{
                    axis: {stroke: '#333333', strokeWidth: 1},
                    tickLabels: {fontSize: 10, fontFamily: 'Poppins-Regular'},
                    ticks: {stroke: '#333333', size: 5},
                    grid: {stroke: 'transparent'},
                  }}
                />
                <VictoryBar
                  cornerRadius={10}
                  style={{
                    data: {fill: '#0A4DFC'},
                    labels: {},
                  }}
                  barWidth={10}
                  // barRatio={20}
                  data={data}
                  x="x"
                  y="y"
                />
              </VictoryChart>
            </View>
          </View>

          <View style={styles.toggleContainer}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                showDH && styles.selectedToggleButton,
              ]}
              onPress={handleToggleDH}>
              <Text
                style={[
                  styles.toggleButtonText,
                  showDH && styles.selectedToggleButtonText,
                ]}>
                With DH
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                !showDH && styles.selectedToggleButton,
              ]}
              onPress={handleToggleDH}>
              <Text
                style={[
                  styles.toggleButtonText,
                  !showDH && styles.selectedToggleButtonText,
                ]}>
                Without DH
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.calculation}>
            <View style={styles.calculationInside}>
              <View>
                <Text style={styles.calculationValuesText1}>9</Text>
                <Text style={styles.calculationValuesText2}>trips</Text>
              </View>
              <View style={styles.verticalLine} />
              <View>
                <Text style={styles.calculationValuesText1}>$2.73</Text>
                <Text style={styles.calculationValuesText2}>Rate/Mile</Text>
              </View>
              <View style={styles.verticalLine} />
              <View>
                <Text style={styles.calculationValuesText1}>3,134</Text>
                <Text style={styles.calculationValuesText2}>Total Miles</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4666FF',
  },
  header: {
    flex: 2,
    marginHorizontal: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    // flexDirection: 'row',
    justifyContent: 'center',
  },

  rateText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Medium',
  },
  recentText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    lineHeight: 15,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 12,
    color: '#4666FF',
    fontFamily: 'Poppins-Medium',
  },

  body: {
    flex: 9,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  innerBody: {
    flex: 1,
    gap: 10,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  buttonTimePeriod: {
    backgroundColor: '#FFFFFF',
    borderRadius: 11,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  selectedButton: {
    backgroundColor: '#4666FF',
  },
  selectedButtonText: {
    color: '#FFFFFF',
  },
  buttonTimePeriodText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#9AA8B7',
  },
  rate: {
    fontSize: 35,
    fontFamily: 'Poppins-SemiBold',
    color: '#333333',
    textAlign: 'center',
    // marginVertical: 10,
  },
  chart: {marginVertical: 0, height: 240},
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',

    // marginVertical: 16,
  },
  toggleButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 11,
  },
  selectedToggleButton: {
    backgroundColor: '#4666FF',
  },
  toggleButtonText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#9AA8B7',
  },
  selectedToggleButtonText: {
    color: '#FFFFFF',
  },
  calculation: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 11,
    marginHorizontal: 20,
    borderColor: '#E7E8E9',
  },
  calculationInside: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  calculationValuesText1: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#333333',
  },
  calculationValuesText2: {
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
    color: '#333333',
  },
  verticalLine: {
    height: '100%',
    width: 2,
    backgroundColor: '#D2D2D2',
  },
});
