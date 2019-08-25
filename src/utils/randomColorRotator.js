class randomColorRotator {
    static tagToColorMap = [];

    static nextColorIndex = 0;

    static colors = ['magenta', 'gold', 'geekblue', 'volcano', 'purple', 'cyan', 'red', 'orange', 'green', 'blue', 'pink'];

    static pickColor(tagName) {
        const colorToUse = this.tagToColorMap.find((mapEntry) => (mapEntry.tagName === tagName));
        if (colorToUse) {
            return colorToUse.color;
        }
        const color = this.colors[this.nextColorIndex];
        this.tagToColorMap.push({ color, tagName });
        this.nextColorIndex = (this.nextColorIndex + 1) % this.colors.length;
        return color;
    }
}

export default randomColorRotator;
