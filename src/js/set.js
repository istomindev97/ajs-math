export default class Team {
    constructor() {
        this.members = new Set();
    }
    add (member) {
        if (!this.members.has(member)) {
            this.members.add(member);
        } else {
            throw new Error('Такой персонаж уже добавлен');
        }
    }

    addAll (...members) {
        members.forEach((member) =>  this.members.add(member));
    }

    toArray () {
        return Array.from(this.members);
    }
}