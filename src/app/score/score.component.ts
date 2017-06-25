import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  public firstNumber: any[] = [];
  public secondNumber: any[] = [];
  public answer: number;

  public scoreForm: FormGroup;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.scoreForm = this._fb.group({
      firstNumber: [0],
      secondNumber: [0]
    })
  }

  scoreChinese() {
    let arrOfFirstNumber: any[] = []
    let arrOfSecondNumber: any[] = []
    this.answer = this.scoreForm.controls.firstNumber.value * this.scoreForm.controls.secondNumber.value
    for(let i = 0; i < String(this.scoreForm.controls.firstNumber.value).length; i++) {
      let arr: number[] = []
      for(let j = 0; j < Number(String(this.scoreForm.controls.firstNumber.value)[i]); j++) {
        arr.push(j)
      }
      arrOfFirstNumber.push(arr)
    }
    for(let i = 0; i < String(this.scoreForm.controls.secondNumber.value).length; i++) {
      let arr: number[] = []
      for(let j = 0; j < Number(String(this.scoreForm.controls.secondNumber.value)[i]); j++) {
        arr.push(j)
      }
      arrOfSecondNumber.push(arr)
    }
    this.firstNumber = arrOfFirstNumber
    this.secondNumber = arrOfSecondNumber
    console.log(arrOfFirstNumber, arrOfSecondNumber)
    setTimeout(() => {
      let firstPictures: any = document.getElementsByClassName('first-picture')
      let secondPictures: any = document.getElementsByClassName('second-picture')
      let firstWidth = firstPictures[0].offsetWidth;
      let secondWidth = secondPictures[0].offsetWidth;
      console.log(firstPictures[0].children, secondPictures[0].children)
      for(let i = 0; i < firstPictures[0].children.length; i++) {
        for(let j = 0; j < firstPictures[0].children[i].children.length; j++) {
            firstPictures[0].children[i].children[j].style.height = `${firstWidth + 30}px`
        }
      }
      for(let i = 0; i < secondPictures[0].children.length; i++) {
        for(let j = 0; j < secondPictures[0].children[i].children.length; j++) {
            secondPictures[0].children[i].children[j].style.height = `${firstWidth + 5}px`
        }
      }
      // secondPictures[0].children.forEach(picture => {
      //   picture.children.forEach(line => {
      //     line.style.height = `${secondWidth}px`
      //   })
      // })
      console.log(firstPictures, firstWidth, secondPictures, secondWidth)
    }, 500)
  }

  goNext(route: string) {
    this.router.navigate([route])
  }

}
