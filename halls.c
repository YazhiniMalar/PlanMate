#include <stdio.h>
int main() {
    int r, c, total_students, students_per_class, class;
    printf("Enter the number of rows: ");
    scanf("%d", &r);
    printf("Enter the number of columns: ");
    scanf("%d", &c);
    printf("Enter the total number of students: ");
    scanf("%d", &total_students);
    students_per_class= r * c;
    class = total_students / students_per_class;
    if (total_students % students_per_class != 0) {
        class++;
    }
    int student_in_final_class = total_students - (students_per_class * (class - 1));
    if (student_in_final_class > students_per_class) {
        student_in_final_class = students_per_class;
    }
    int i, no_of_student_per_class;
    for (i = 1; i <= class; i++) {
        if (i == class) {
            no_of_student_per_class = student_in_final_class;
        } else {
            no_of_student_per_class = students_per_class;
        }
        printf("Class %d: %d students\n", i, no_of_student_per_class);
    }

    return 0;
}