import { Component, OnInit } from '@angular/core';
import { ConceptsService } from 'src/app/_services/concepts.service';

@Component({
  selector: 'app-p05',
  templateUrl: './p05.component.html',
  styleUrls: ['./p05.component.css']
})
export class P05Component implements OnInit {
  concepts: string[] = [];

  constructor(private conceptsService: ConceptsService) { }

  ngOnInit() {
    this.conceptsService.getConcepts().subscribe(
      data => this.concepts = data
    );
  }

}
