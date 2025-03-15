<template>
  <div class="modal">
    <div class="modal-content">
      <h2>Edit Event</h2>
      <form @submit.prevent="saveEvent">
        <div>
          <label>Event Name:</label>
          <input type="text" v-model="editedEvent.name" required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" v-model="editedEvent.date" required />
        </div>
        <div>
          <label>Start Time:</label>
          <input type="time" v-model="editedEvent.startTime" required />
        </div>
        <div>
          <label>End Time:</label>
          <input type="time" v-model="editedEvent.endTime" required />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" v-model="editedEvent.location" required />
        </div>
        <div class="modal-actions">
          <button type="submit">Save</button>
          <button type="button" @click="deleteEvent">Delete</button>
          <button type="button" @click="$emit('close')">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["eventData"],
  data() {
    return {
      editedEvent: { ...this.eventData },
    };
  },
  watch: {
    eventData: {
      immediate: true,
      handler(newVal) {
        this.editedEvent = { ...newVal };
      },
    },
  },
  methods: {
    saveEvent() {
      this.$emit("update", this.editedEvent);
      this.$emit("close");
    },
    deleteEvent() {
      this.$emit("delete", this.editedEvent.id);
    },
  },
};
</script>

<style>
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

  