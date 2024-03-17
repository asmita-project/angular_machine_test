import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@Component({
  selector: 'app-usertable',
  standalone: true,
  imports: [MatIconModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, CommonModule,FormsModule,NgxPaginationModule],
  templateUrl: './usertable.component.html',
  styleUrl: './usertable.component.css'
})
export class UsertableComponent implements OnInit {
  id: any
  p: number = 1;
  userForm!: FormGroup;
  filteredData:any=[]
  userlist: any = []
  editform!: FormGroup;
  searchinput:any
  showAllData:boolean = false
  constructor(private modelservice: NgbModal,
    private fb: FormBuilder,
    private service: UserService
  ) {

  }
  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      role: new FormControl('', [Validators.required]),

    })

    this.editform = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      role: new FormControl('', [Validators.required]),

    })

    this.userlist = this.service.userData
    this.filteredData = [...this.userlist];
    console.log("log...",this.filteredData)
  }
  addRow(content: any) {
    this.modelservice.open(content, { ariaLabelledBy: "modal-basic-title", size: 'lg', });
  }
  reset() {
    this.userForm.reset()
  }
  submitdata() {
    const formdata = { ...this.userForm.value }
    let data = {
      name: formdata.name,
      email: formdata.email,
      role: formdata.role
    }
    this.service.userservice(data)
    Swal.fire({
      title: "User Added Successfully",
      text: "",
      icon: "success"
    });
    this.modelservice.dismissAll()
    this.reset()
    this.filteredData = [...this.userlist];
  }

  updateRow(content: any, id: any, item: any) {
    this.modelservice.open(content, { ariaLabelledBy: "modal-basic-title", size: 'lg', });
    this.editform.setValue({
      name: item.name,
      email: item.email,
      role: item.role,
    })
    this.id = id
  

  }

  updateRowSave() {
    const formdata = { ...this.editform.value }
    let data = {
      name: formdata.name,
      email: formdata.email,
      role: formdata.role
    }
    this.userlist.map((item:any,index:any)=>{
      if (index == this.id) {
        this.userlist[this.id] = {...data}
      }
    })
    // this.userlist.splice(this.id,{ ...data })
    Swal.fire({
      title: "User Update Successfully",
      text: "",
      icon: "success"
    });
    this.modelservice.dismissAll()
    this.filteredData = [...this.userlist];
  }

  deletedata(id:any){
    this.userlist.splice(id,1)
    Swal.fire({
      title: "User Delete Successfully",
      text: "",
      icon: "success"
    });
    this.filteredData = [...this.userlist];
  }

view(content:any,item:any){
  this.modelservice.open(content, { ariaLabelledBy: "modal-basic-title", size: 'lg', });
  this.editform.setValue({
    name: item.name,
    email: item.email,
    role: item.role,
  })
}

onSearchChange(){
  if (!this.searchinput.trim()) {
    this.filteredData = [...this.userlist];
    this.showAllData = true; // Set the flag to show all data
  } else {
    this.filteredData = this.userlist.filter(
      (item:any) =>
        item.name
          .toLowerCase()
          .includes(this.searchinput.toLowerCase()) ||
          item.email
          .toLowerCase()
          .includes(this.searchinput.toLowerCase()) ||
          item.role
          .toLowerCase()
          .includes(this.searchinput.toLowerCase()) 
    );
    this.showAllData = false; 
  }
}
}
