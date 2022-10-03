import {Component, Input, OnInit} from '@angular/core';
import {DeveloperModel} from "../models/developer.model";
import {SkillModel} from "../models/skill.model";

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {

developer: DeveloperModel = new DeveloperModel('Fon','Chris',39,'Aucune idée','Adore ratisser le goudron',[
  new SkillModel('skill 1','logo1','site 1'),
  new SkillModel('skill 2','logo2','site 2'),
])

}
