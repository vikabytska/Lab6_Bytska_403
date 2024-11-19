<template>
  <div class="content">
    <h2>Актуальні курси</h2>
    <p id="text2">Саме час розпочати навчання!</p>
    
    <div class="courses-container">
      <div 
        class="course" 
        v-for="course in coursesStore.courses" 
        :key="course.id" 
        @click="goToCoursePage(course.id)"
      >
        <img :src="course.imageUrl" alt="course image" />
        <div class="course-details">
          <h3>{{ course.title }}</h3>
          <h4>Викладач: {{ course.instructor }}</h4>
          <p>
            Рекомендовано для студентів групи {{ course.groupNumber }} спеціальності {{ course.specialty }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useCoursesStore } from "@/stores/courses";
import { useRouter } from "vue-router";

const coursesStore = useCoursesStore();
const router = useRouter();

const goToCoursePage = (id) => {
  router.push({ name: 'CourseView', params: { id } });
};

onMounted(() => {
  coursesStore.fetchCoursesFromDB();
});
</script>

<style scoped>
/* Заголовок сторінки */
h2 {
  font-size: 2.3rem;
  color: #1B5E20;
  text-align: center;
  margin: 35px 0 20px;
  text-transform: uppercase;
}

/* Опис сторінки */
#text2 {
  font-size: 1.2rem;
  color: #7f8c8d;
  text-align: center;
  margin-bottom: 20px;
  font-style: italic;
}

/* Контейнер для курсів */
.courses-container {
  display: flex; 
  justify-content: space-between; 
  gap: 20px; 
  flex-wrap: wrap; 
  margin-top: 20px; 
  max-width: 1300px;
  margin: 0 auto; 
  padding: 16px; 
}

/* Оформлення картки курсу */
.course {
  width: 30%; 
  background: #fff; 
  border-radius: 10px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  overflow: hidden; 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer; 
  margin-bottom: 10px;
}

/* Зображення курсу */
.course img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

/* Контейнер для деталей курсу */
.course-details {
  padding: 15px;
}

/* Заголовок курсу */
.course h3 {
  font-size: 1.2rem;
  color: #333;
  margin: 0 0 10px; 
}

.course h4 {
  font-size: 1rem;
  color: #555;
  margin: 0 0 10px; 
}


.course p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
  margin: 0; 
}


.course:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .courses-container {
    justify-content: center;
    gap: 15px; 
  }
  .course {
    width: 90%; 
  }
}

@media (max-width: 480px) {
  .course {
    width: 100%;
  }
}
</style>


  