import { defineStore } from 'pinia';

export const useCoursesStore = defineStore('courses', {
  state: () => ({
    courses: [], 
    mycourses: [],
    advantages: [
      {
        title: "Гнучкість",
        description:
          "Навчайтеся у зручний для вас час та у своєму темпі, незалежно від місця проживання.",
      },
      {
        title: "Економія часу",
        description: "Не витрачайте час на дорогу до місця навчання.",
      },
      {
        title: "Доступність",
        description: "Доступ до курсів у будь-який час із будь-якого пристрою.",
      },
      {
        title: "Індивідуальний підхід",
        description:
          "Вивчайте теми, які вас цікавлять, з можливістю вибору власного маршруту.",
      },
      {
        title: "Різноманітність матеріалів",
        description:
          "Курси містять відео, текстові матеріали, тести та інтерактивні вправи.",
      },
      {
        title: "Досвід викладачів",
        description:
          "Отримуйте знання від кваліфікованих експертів у своїй галузі.",
      },
      {
        title: "Постійний доступ",
        description:
          "Матеріали доступні навіть після завершення курсу для повторення.",
      },
      {
        title: "Соціальна взаємодія",
        description:
          "Спілкуйтеся з викладачами та студентами через форуми та чати.",
      },
    ], 


  }),

  actions: {
    // Метод для отримання курсів з API
    fetchCoursesFromDB() {
      fetch('https://dummyjson.com/c/8ad9-56c2-42e4-b6e8')
        .then(res => res.json())
        .then(json => {
          this.courses = json.courses;
        })
        .catch(err => {
          console.error("Помилка при завантаженні курсів: ", err);
        });
    },

    addToMyCourses(course) {
      if (course && !this.mycourses.some(c => c.id === course.id)) {
        this.mycourses.push(course); // Додаємо курс до mycourses
      } else {
        console.log("Курс вже доданий або не існує");
      }
    }
  }
});



