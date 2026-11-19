import { Component } from '@angular/core';
import { members } from '../../data/member';
import {type TeamMember } from '../../models/team-member';
import { TitleCasePipe, NgClass, NgStyle } from '@angular/common';
import { type Role } from '../../models/team-member';

@Component({
  imports: [TitleCasePipe, NgClass, NgStyle],
  selector: 'app-member-list',
  styleUrl: './member-list.css',
  templateUrl: './member-list.html',
})
export class MemberList {

  members: TeamMember[] = members;

  filterMembers: TeamMember[] = [];

  filter(role: Role): void {
    this.filterMembers = this.members.filter(
      member => member.role === role
    );

    console.log(this.filterMembers);
  }
}
