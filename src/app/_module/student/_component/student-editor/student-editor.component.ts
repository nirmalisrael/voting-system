import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DegreeType } from 'src/app/_module/student/_dto/degree-type';
import { Department } from 'src/app/_module/student/_dto/department';
import { StudentResponse } from '../../_dto/student-response';
import { Gender } from '../../_dto/gender';

@Component({
  selector: 'app-student-editor',
  templateUrl: './student-editor.component.html',
  styleUrls: ['./student-editor.component.css']
})
export class StudentEditorComponent {
  degreeTypeOptions: string[] = [];
  departmentOptions: string[] = [];

  currentPage: number = 1;
  studentsPerPage: number = 15;

  showPagination: boolean = false;
  @ViewChild('tableContainer') tableContainer!: ElementRef;



  studentList: StudentResponse[] = [
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},
    {deptNo: '21UCS01', studentName: 'Durai', dateOfBirth: new Date('2000-09-21'), admissionYear: 2021, gender: Gender.MALE, degreeType: DegreeType.UG, department: Department.COMPUTER_SCIENCE, emailId: 'nirmalmeenu111@gmail.com',phoneNumber: 8754271092, address: '220, madha kovil street, alliyanthal, tiruvannaamali.'},

  ]

  ngOnInit() {
    this.populateDegreeTypeOptings();
    this.populateDepartmentOptings();
  }

  private populateDegreeTypeOptings() {
    this.degreeTypeOptions = Object.values(DegreeType);
  }
  
  private populateDepartmentOptings() {
    this.departmentOptions = Object.values(Department);
  }

  get studentsToShow() : any[] {
    const startIndex = (this.currentPage - 1) * this.studentsPerPage;
    return this.studentList.slice(startIndex, startIndex + this.studentsPerPage);
  }
  
  prevPage() {
    if(this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if(this.studentsToShow.length === this.studentsPerPage) {
      this.currentPage++;
    }
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollTop = (event.target as Element).scrollTop || (document.documentElement.scrollTop || document.body.scrollTop);
    this.showPagination = scrollTop > 150; // Adjust the threshold as needed
  }
}