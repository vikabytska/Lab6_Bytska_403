<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-6 first-column">
          <h1 id="edulearn">EDULEARN</h1>
          <p id="ed1">інноваційна онлайн-платформа, створена для того, щоб зробити навчання доступним та зручним для студентів і викладачів, створюючи нові можливості для взаємодії у цифровому просторі. Ми прагнемо полегшити навчальний процес та забезпечити максимальний комфорт як для учнів, так і для педагогів, завдяки сучасним інструментам для організації навчання.</p>
        </div>
        
        <div class="col-6">
          <img src="@/assets/mainpage.avif" alt="">
        </div>
      </div>
    </div>

    <h2>Популярні курси</h2>
    <div class="courses-list">
      <div
        class="course"
        v-for="course in filteredCourses"
        :key="course.id"
        @click="goToCoursePage(course.id)"
      >
        <img :src="course.imageUrl" alt="course image" />
        <h3>{{ course.title }}</h3>
        <p> {{ course.description }} </p>
      </div>
    </div>

    <div class="container text-center">
      <div class="row">
        <div class="col-4 first-column">
          <h2 id="text-adv">Переваги дистанційного навчання</h2>
        </div>
        
        <div class="col-8">
          <div class="advantages-grid">
            <div
              v-for="(advantage, index) in advantages"
              :key="index"
              class="advantage-card"
              @mouseenter="flipCard(index)"
              @mouseleave="flipCard(index)"
            >
              <div
                class="card-inner"
                :class="{ flipped: flippedIndex === index }"
              >
                <div class="card-front">
                  <h3>{{ advantage.title }}</h3>
                </div>

                <div class="card-back">
                  <p>{{ advantage.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useCoursesStore } from "@/stores/courses";
import { useRouter } from "vue-router";

const coursesStore = useCoursesStore();
const router = useRouter();

// відображення трьох курсів
const filteredCourses = computed(() => {
  return coursesStore.courses.filter(course => [10, 9, 4].includes(course.id));
});

function goToCoursePage(id) {
  router.push({ name: 'CourseView', params: { id } });
}

const advantages = coursesStore.advantages || [];  // Якщо advantages не визначено, використовуємо порожній масив
const flippedIndex = ref(null);

function flipCard(index) {
  flippedIndex.value = flippedIndex.value === index ? null : index;
}

onMounted(() => {
  console.log('MOUNTED >>>>>');
  coursesStore.fetchCoursesFromDB();
});
</script>


<style scoped>

#edulearn{
  font-size: 7rem;
  color: #1B5E20;
  font-weight: thick;
  text-align:center;
  margin-top: 100px;
  margin-bottom: 5px;


}

#ed1{
  font-size: 18px;
}

h2{
  font-size: 2.3rem;
  color: #1B5E20;
  font-weight: thick;
  text-align:center;
  margin-top: 50px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.container img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
}


#text-adv {
  font-size: 3rem;
  color: #1B5E20;
  font-weight: thick;
  text-align: left;
  margin-top: 120px;
  text-transform: uppercase;
}

.first-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin: 20px auto;
  max-width: 1200px;
  padding: 20px;
}

.advantage-card {
  perspective: 1500px;
  cursor: pointer;
  transform: scale(1.1);
}

.card-inner {
  width: 100%;
  padding-top: 90%;
  position: relative;
  transform-style: preserve-3d;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card-inner.flipped {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card-front {
  background: linear-gradient(145deg, #ffffff, #f8f8f8);
  border: 2px solid #1B5E20;
  box-shadow: 
    10px 10px 20px rgba(0, 0, 0, 0.15),
    -10px -10px 20px rgba(255, 255, 255, 1),
    inset 2px 2px 4px rgba(255, 255, 255, 0.9),
    inset -2px -2px 4px rgba(0, 0, 0, 0.05),
    0 5px 15px rgba(27, 94, 32, 0.1);
}

.card-front h3 {
  color: black;
  font-size: 1.2rem;
  font-weight: lighter;
  margin: 0;
  line-height: 1.4;
}

.card-back {
  background: linear-gradient(135deg, #1B5E20, #2E7D32);
  transform: rotateY(180deg);
  color: white;
  font-weight: lighter;
  border: 2px solid #1B5E20;
  box-shadow: 
    10px 10px 20px rgba(0, 0, 0, 0.2),
    -10px -10px 20px rgba(255, 255, 255, 0.1),
    0 8px 20px rgba(27, 94, 32, 0.2);
}

.advantage-card:hover .card-inner {
  transform: translateY(-15px) rotateY(0deg);
}

.advantage-card:hover .card-inner.flipped {
  transform: translateY(-15px) rotateY(180deg);
}

.advantage-card:hover .card-front {
  box-shadow: 
    15px 15px 30px rgba(0, 0, 0, 0.15),
    -15px -15px 30px rgba(255, 255, 255, 1),
    inset 2px 2px 4px rgba(255, 255, 255, 0.9),
    inset -2px -2px 4px rgba(0, 0, 0, 0.05),
    0 8px 20px rgba(27, 94, 32, 0.15);
  border-color: #2E7D32;
}

.advantage-card:hover .card-back {
  box-shadow: 
    15px 15px 30px rgba(0, 0, 0, 0.2),
    -15px -15px 30px rgba(255, 255, 255, 0.1),
    0 12px 25px rgba(27, 94, 32, 0.25);
  border-color: #2E7D32;
}

.card-back p {
  margin: 0;
  line-height: 1.5;
  opacity: 0.95;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .advantages-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}

/* Контейнер з курсами */
.courses-list {
  display: flex; 
  justify-content: space-between; 
  gap: 20px; 
  flex-wrap: wrap; 
  margin-top: 20px; 
  max-width: 1300px; 
  margin: 0 auto;
  padding: 16px; 
}

/* Картка курсу */
.course {
  width: 30%;
  background: #fff; 
  border-radius: 10px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden; 
  transition: transform 0.3s ease, box-shadow 0.3s ease; 
  cursor: pointer; 
}

/* Зображення на картці */
.course img {
  width: 100%; 
  height: 200px; 
  object-fit: cover; 
}

/* Заголовок курсу */
.course h3 {
  font-size: 1.2rem;
  color: #333; 
  padding: 15px;
  margin: 0; 
}

/* Опис курсу */
.course p {
  padding: 0 15px 15px; 
  color: #666; 
  font-size: 1rem; 
  line-height: 1.5;
}

/* Ефект при наведенні */
.course:hover {
  transform: translateY(-10px); 
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); 
}

</style>
