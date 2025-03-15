<template>
  <div class="calendar-container">
    <FullCalendar :options="calendarOptions" />

    <!-- Add Event Modal -->
    <AddEventModal
      v-if="showAddModal"
      :selectedDate="selectedDate"
      @close="closeAddModal"
      @add="handleAddEvent"
    />

    <!-- View Event Modal -->
    <ViewEventModal
      v-if="showViewModal"
      :eventData="selectedEvent"
      @close="closeViewModal"
      @edit="openEditModal"
      @delete="handleDeleteEvent"
    />

    <!-- Edit Event Modal -->
    <EditEventModal
      v-if="showEditModal"
      :eventData="selectedEvent"
      @close="closeEditModal"
      @update="handleUpdateEvent"
    />
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import AddEventModal from "./AddEventModal.vue";
import ViewEventModal from "./ViewEventModal.vue";
import EditEventModal from "./EditEventModal.vue";

export default {
  components: { FullCalendar, AddEventModal, ViewEventModal, EditEventModal },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        events: [],
        selectable: true,
        dateClick: this.handleDateClick,
        eventClick: this.handleEventClick,
      },
      selectedDate: "",
      showAddModal: false,
      selectedEvent: null,
      showViewModal: false,
      showEditModal: false,
    };
  },
  methods: {
    // When a date is clicked, open the Add Event modal
    handleDateClick(info) {
      this.selectedDate = info.dateStr;
      this.showAddModal = true;
    },
    closeAddModal() {
      this.showAddModal = false;
    },
    // Add the new event (with validations)
    handleAddEvent(eventData) {
      if (
        !eventData.date ||
        !eventData.startTime ||
        !eventData.endTime ||
        !eventData.name
      ) {
        alert("Please fill in all required fields.");
        return;
      }
      const start = eventData.date + "T" + eventData.startTime;
      const end = eventData.date + "T" + eventData.endTime;
      const newEvent = {
        id: String(Date.now()),
        title: eventData.name,
        start: start,
        end: end,
        allDay: false,
        extendedProps: {
          location: eventData.location,
        },
      };
      this.calendarOptions.events.push(newEvent);
      this.showAddModal = false;
    },
    // When an event is clicked, show the View Event modal
    handleEventClick(info) {
      const event = info.event;
      const startDate = event.start
        ? event.start.toISOString().split("T")[0]
        : "";
      const startTime = event.start
        ? event.start.toISOString().split("T")[1].slice(0, 5)
        : "";
      const endTime = event.end
        ? event.end.toISOString().split("T")[1].slice(0, 5)
        : "";
      this.selectedEvent = {
        id: event.id,
        name: event.title,
        date: startDate,
        startTime: startTime,
        endTime: endTime,
        location: event.extendedProps.location,
      };
      this.showViewModal = true;
    },
    closeViewModal() {
      this.showViewModal = false;
      this.selectedEvent = null;
    },
    // Called from View modal when user clicks "Edit"
    openEditModal(eventData) {
      // Close view modal and open edit modal with current event data
      this.showViewModal = false;
      this.showEditModal = true;
    },
    closeEditModal() {
      this.showEditModal = false;
      this.selectedEvent = null;
    },
    // Update the event with edited values
    handleUpdateEvent(updatedEvent) {
      const idx = this.calendarOptions.events.findIndex(
        (e) => e.id === updatedEvent.id
      );
      if (idx !== -1) {
        this.calendarOptions.events[idx] = {
          id: updatedEvent.id,
          title: updatedEvent.name,
          start: updatedEvent.date + "T" + updatedEvent.startTime,
          end: updatedEvent.date + "T" + updatedEvent.endTime,
          allDay: false,
          extendedProps: {
            location: updatedEvent.location,
          },
        };
      }
      this.closeEditModal();
    },
    // Delete event
    handleDeleteEvent(eventId) {
      this.calendarOptions.events = this.calendarOptions.events.filter(
        (e) => e.id !== eventId
      );
      this.closeViewModal();
    },
  },
};
</script>

<style>
.calendar-container {
  max-width: 900px;
  margin: auto;
}
</style>