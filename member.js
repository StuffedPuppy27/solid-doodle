function skillsMember() {
    this.skills = [
        { name: 'JavaScript', level: 'advanced' },
        { name: 'NodeJS', level: 'advanced' },
        { name: 'React', level: 'advanced' },
    ];
    this.getSkills = function() {
        return this.skills;
    };
}