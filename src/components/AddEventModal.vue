<template>
    <div class="modal">
      <div class="modal-content">
        <h2>Schedule Gym Session</h2>
        <form @submit.prevent="addEvent">
          <div>
            <label>Gym With:</label>
            <input type="text" v-model="eventData.name" required />
          </div>
          <div>
            <label>Date:</label>
            <input type="date" v-model="eventData.date" required />
          </div>
          <div>
            <label>Start Time:</label>
            <input type="time" v-model="eventData.startTime" required />
          </div>
          <div>
            <label>End Time:</label>
            <input type="time" v-model="eventData.endTime" required />
          </div>
          <div>
            <label>Location:</label>
            <input type="text" v-model="eventData.location" />
          </div>
          <div class="modal-actions">
            <button type="submit">Add Event</button>
            <button type="button" @click="close">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType, ref, watch } from 'vue';
  
  interface EventData {
    name: string;
    date: string;
    startTime: string;
    endTime: string;
    location: string;
  }
  
  export default defineComponent({
    name: 'AddEventModal',
    props: {
      selectedDate: {
        type: String as PropType<string>,
        default: ''
      }
    },
    setup(props, { emit }) {
      const eventData = ref<EventData>({
        name: '',
        date: props.selectedDate,
        startTime: '',
        endTime: '',
        location: ''
      });
  
      // Watch for changes in the prop and update the reactive eventData.date
      watch(
        () => props.selectedDate,
        (newVal) => {
          eventData.value.date = newVal;
        }
      );
  
      const addEvent = () => {
        // Emit the "add" event with the current eventData
        emit('add', eventData.value);
      };
  
      const close = () => {
        // Emit a "close" event
        emit('close');
      };
  
      // Return the properties so they're available in the template
      return { eventData, addEvent, close };
    }
  });
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
  }
  .modal-actions {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  </style>