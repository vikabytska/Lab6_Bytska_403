<template>
  <div v-if="myCourses.length > 0">
    <h2>Мої курси</h2>
    <div v-for="course in myCourses" :key="course.id" class="course-card">
      <img :src="course.imageUrl" alt="" class="course-image" />
      <div class="course-info">
        <h3>{{ course.title }}</h3>
        <p>Викладач: {{ course.instructor }}</p>

        <!-- Прогрес-бар для трекера активності -->
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h2 id="nocourses">Поточні курсі відсутні</h2>
    <button @click="router.push({ name: 'Courses' })" class="navigate-button">Знайти курс</button>
  </div>
</template>

<script setup>
import { useCoursesStore } from "@/stores/courses";
import { useRouter } from "vue-router";

const router = useRouter(); // Отримуємо доступ до об'єкта router

const coursesStore = useCoursesStore();
const myCourses = coursesStore.mycourses; // Отримуємо список зареєстрованих курсів
</script>

<style scoped>

h2 {
  font-size: 2.3rem;
  color: #1B5E20;
  text-align: center;
  margin: 35px 0 20px;
  text-transform: uppercase;
}


#nocourses {
  font-size: 2rem;
  color:#18421b ; 
  font-weight:thick; 
  text-align: center; 
  margin-bottom: 15px; 
  margin-top: 80px;
  letter-spacing: 1px;
  text-transform:none;
}

.course-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 10px auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 800px;
  width: 90%;
  cursor: pointer;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}


.course-image {
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.course-card:hover .course-image {
  transform: scale(1.05);
}


.course-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.course-info h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.course-info p {
  color: #777;
  font-size: 1rem;
  margin: 0;
  text-align: left;

}

/* Прогрес-бар */
.progress {
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 12px;
  height: 20px;
  overflow: hidden;
  margin-top: 10px;
}

.progress-bar {
  background-color: #4caf50;
  height: 100%;
  line-height: 20px;
  color: white;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  border-radius: 12px;
}

p {
  text-align: center;
  color: #555;
  font-size: 1.2rem;
  margin-top: 20px;
}

.navigate-button {
  background-color: white;
  border: 2px solid #18421b; 
  color: #18421b; 
  padding: 8px 20px; 
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px; 
  cursor: pointer;
  display: block;
  margin: 20px auto; 
  transition: background-color 0.3s, color 0.3s; 
}

.navigate-button:hover {
  background-color: #18421b; 
  color: white; 
}

@media (max-width: 768px) {
  .course-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .course-image {
    width: 100px;
    height: 100px;
  }
}
</style>
