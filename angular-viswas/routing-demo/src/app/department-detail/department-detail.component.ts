import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId = 0;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //let id = parseInt(this.route.snapshot.paramMap.get('id') as string);
    //this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') as string)
      this.departmentId = id;
    })
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    if (previousId >= 1) {
      this.router.navigate(['/departments', previousId])
    }
  }

  goNext() {
    let nextId = this.departmentId + 1;
    if (nextId <= 5) {
      this.router.navigate(['/departments', nextId])
    }
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    //this.router.navigate(['/departments', { id: selectedId, test: 'testvalue' }])
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route })
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route })
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route })
  }
}
