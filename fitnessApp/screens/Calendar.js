import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Calendar } from 'react-native-calendars';
import Feather from 'react-native-vector-icons/Feather';

export function PantallaCalendar({ navigation }) {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    const [selected, setSelected] = useState('');
    const [events, setEvents] = useState({
        '2024-10-29': { workouts: ['Swimming', 'Tennis'], duration: '1.5h' },
        '2024-10-30': { workouts: ['Running'], duration: '45min' },
    });

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'Poppins-Regular': Poppins_400Regular,
                'Poppins-SemiBold': Poppins_600SemiBold,
            });
            setFontsLoaded(true);
        }
        loadFonts();
    }, []);

    if (!fontsLoaded) return null;

  const renderEventList = () => {
    if (selected && events[selected]) {
      return (
        <View style={styles.eventContainer}>
          <Text style={styles.eventDate}>Activities for {selected}</Text>
          {events[selected].workouts.map((workout, index) => (
            <View key={index} style={styles.eventCard}>
              <View style={styles.eventIconContainer}>
                <Feather name="activity" size={24} color="black" />
              </View>
              <View style={styles.eventDetails}>
                <Text style={styles.eventTitle}>{workout}</Text>
                <Text style={styles.eventDuration}>{events[selected].duration}</Text>
              </View>
            </View>
          ))}
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Feather name="chevron-left" size={40} onPress={() => navigation.navigate('PantallaInicio')}/>
      <TouchableOpacity><Feather name="menu" size={40} /></TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Calendar</Text>
        
        <Calendar
          style={styles.calendar}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#000000',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#000000',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#000000',
            selectedDotColor: '#ffffff',
            arrowColor: 'black',
            monthTextColor: 'black',
            textDayFontFamily: 'Poppins-Regular',
            textMonthFontFamily: 'Poppins-Regular',
            textDayHeaderFontFamily: 'Poppins-Regular',
            textDayFontSize: 16,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 14
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: 'black',
            },
            ...Object.keys(events).reduce((acc, date) => ({
              ...acc,
              [date]: {
                marked: true,
                dotColor: 'black',
              }
            }), {})
          }}
          onDayPress={day => {
            setSelected(day.dateString);
          }}
        />

        {renderEventList()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  header: {
    marginTop: 36,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 45,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 10,
    marginLeft: 10,
    color: 'black',
  },
  calendar: {
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20,
  },
  eventContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
  eventDate: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: 'black',
  },
  eventCard: {
    flexDirection: 'row',
    backgroundColor: '#aed4ec',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  eventIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  eventDetails: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  eventDuration: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});