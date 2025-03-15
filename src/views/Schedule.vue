<template>
    <h1>Schedule</h1>
    <div>
      <CalendarComponent />
    </div>
  </template>
  
  <script>
  import CalendarComponent from "@/components/CalendarComponent.vue";
  
  export default {
    name: "Schedule",  // ✅ Added missing comma
    components: { CalendarComponent } // ✅ Properly formatted
  };
  </script>