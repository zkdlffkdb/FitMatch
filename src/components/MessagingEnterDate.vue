<template>
    <div>
      <div class="modal-container">
        <label class="modal-header">Enter date</label>
        <div class="input-container">
          <label class="input-label">Date</label>
          <input v-model="selectedDate" type="date" class="date-input" />
          <span class="calendar-icon">📅</span>
        </div>
        <div class="button-container">
          <button class="cancel-button">Cancel</button>
          <button class="next-button">Next</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedDate: "2025-01-03",
      };
    },
  };
  </script>
  
  <style scoped>
  .modal-container {
    background-color: #A67CBA;
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 384px;
  }
  
  .modal-header {
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
    display: block;
  }
  
  .input-container {
    position: relative;
    border-top: 1px solid white;
    padding-bottom: 8px;
    margin-bottom: 16px;
  }
  
  .input-label {
    color: white;
    font-size: 14px;
  }
  
  .date-input {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    outline: none;
  }
  
  .calendar-icon {
    position: absolute;
    right: 12px;
    top: 30px;
    color: white;
  }
  
  .button-container {
    display: flex;
    justify-content: space-between;
  }
  
  .cancel-button, .next-button {
    color: white;
    font-size: 14px;
    background: none;
    border: none;
    cursor: pointer;
    font-weight: bold;
  }

  </style>