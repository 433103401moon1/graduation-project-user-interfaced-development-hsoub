(function () {
    function CountTo(element, options) {
        this.element = element;
        this.options = Object.assign({}, CountTo.DEFAULTS, element.dataset, options);
        this.init();
    }

    CountTo.DEFAULTS = {
        suffix: '',
        from: 0,
        to: 0,
        speed: 1000,
        refreshInterval: 100,
        decimals: 0,
        formatter: function (value, options) {
            return value.toFixed(options.decimals);
        },
        onUpdate: null,
        onComplete: null
    };

    CountTo.prototype.init = function () {
        this.value = parseFloat(this.options.from);
        this.loops = Math.ceil(this.options.speed / this.options.refreshInterval);
        this.increment = (parseFloat(this.options.to) - parseFloat(this.options.from)) / this.loops;
        this.loopCount = 0;
    };
    CountTo.prototype.update = function () {
        this.value += this.increment;
        this.loopCount++;
        this.render();

        if (typeof this.options.onUpdate === 'function') {
            this.options.onUpdate.call(this.element, this.value);
        }

        if (this.loopCount >= this.loops) {
            clearInterval(this.interval);
            this.value = parseFloat(this.options.to);
            if (typeof this.options.onComplete === 'function') {
                this.options.onComplete.call(this.element, this.value);
            }
        }
    };

    CountTo.prototype.render = function () {
        this.element.textContent = this.options.formatter.call(this.element, this.value, this.options) + this.options.suffix // numder + suffix;
    };

    CountTo.prototype.start = function () {
        this.stop();
        this.render();
        this.interval = setInterval(this.update.bind(this), this.options.refreshInterval);
    };

    CountTo.prototype.stop = function () {
        clearInterval(this.interval);
    };

    window.CountTo = CountTo;

    window.initCountTo = function (elements) {
        elements.forEach(function (el) {
            const countTo = new CountTo(el);
            countTo.start();
        });
    };
})();
