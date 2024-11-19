<template>
  <div class="course" v-if="selectedCourse">
    <div class="course-grid">
      <!-- Перша сітка: фото курсу та його опис -->
      <div class="course-info">
        <div class="col">
          <h2>{{ selectedCourse.title }}</h2>
          <h4>Опис курсу</h4>
          <p>{{ selectedCourse.longDescription }}</p>
        </div>
        <div class="col">
          <button @click="addToMyCourses">Зареєструватись</button>
          <img :src="selectedCourse.imageUrl" alt="Фото курсу" />
        </div>
      </div>

      <!-- Друга сітка: інформація про викладача (тепер під курсом) -->
      <div class="instructor-info">
        <div class="col">
          <img :src="selectedCourse.instructorImg" alt="Фото викладача" />
        </div>
        <div class="col">
          <h4>Про викладача</h4>
          <p>Куратором даного курсу є {{ selectedCourse.instructor }}.</p>
          <p>Посада: {{ selectedCourse.positions }}</p>
          <p>Досвід роботи: {{ selectedCourse.experience }}</p>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import { computed } from "vue";
import { useCoursesStore } from "@/stores/courses";
import { useRoute, useRouter } from "vue-router";

const coursesStore = useCoursesStore();
const route = useRoute();
const router = useRouter();

// Отримуємо вибраний курс
const selectedCourse = computed(() => {
  return coursesStore.courses?.find(
    (item) => item.id === Number(route.params.id)
  );
});

// Додаємо курс до "Мої курси" та перенаправляємо на сторінку "MyCoursesView"
const addToMyCourses = () => {
  if (selectedCourse.value) {
    coursesStore.addToMyCourses(selectedCourse.value); // Додаємо курс
    router.push({ name: 'MyCoursesView' }); // Перехід на сторінку "Мої курси"
  } else {
    console.log('Курс не знайдений');
  }
};
</script>


<style scoped>
/* Загальні стилі для компонента */
.course {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
}

/* Стилі для сітки курсу */
.course-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  padding: 20px;
}

/* Стилі для фото курсу та інформації */
.course-info {
  display: flex;
  gap: 20px;
  align-items: center;
}

.course-info .col img {
  width:100%;
  height: auto;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
}

.course-info .col h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
}


p {
  font-size: 16px;
}

/* Стилі для фото викладача та інформації */
.instructor-info {
  display: flex;
  gap: 20px;
  align-items: center;
}

.instructor-info .col img {
  width:80%;
  height: 300px;
  border-radius: 10%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  

}

 h4 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

button {
  background-color: #18421b; 
  border: 2px solid #18421b; 
  color: white;
  padding: 8px 40px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer; 
  display: block;
  margin: 20px auto; 
  transition: background-color 0.3s, color 0.3s;
  width: 60%; 
}

button:hover {
  background-color: white; 
  color: #18421b; 
}



</style>
