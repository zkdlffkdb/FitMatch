<template>
    <div class="modal">
      <div class="modal-content">
        <h2>Scheduled Session</h2>
        <p><strong>Name:</strong> {{ eventData.name }}</p>
        <p><strong>Date:</strong> {{ eventData.date }}</p>
        <p><strong>Start Time:</strong> {{ eventData.startTime }}</p>
        <p><strong>End Time:</strong> {{ eventData.endTime }}</p>
        <p><strong>Location:</strong> {{ eventData.location }}</p>
        <div class="modal-actions">
          <button @click="$emit('edit', eventData)">Edit</button>
          <button @click="$emit('delete', eventData.id)">Delete</button>
          <button @click="$emit('close')">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["eventData"],
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