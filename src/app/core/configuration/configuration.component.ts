import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigurationService } from '../configuration.service';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-configuration',
    templateUrl: './configuration.component.html',
    styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
    @ViewChild('f') configForm: NgForm;
    constructor(private configService: ConfigurationService) { }

    ngOnInit() {
        this.configForm.form.valueChanges
            .pipe(
                debounceTime(100)
            )
            .subscribe(value => {
                this.configService.updateConfig.next(value);
            });
    }

    onSubmit() {

    }
    config = {
        loader: 'rolling',
        padding: 10,
        position: 'right',
        height: 1,
        speed: 1000,
        opacity: 1,
        color: '#000',
        background: '#fff'
    }

    loaders = [
        'ball-bounce',
        'ball-ellipsis',
        'ball-fading-shrink',
        'ball-fading',
        'ball-fountain-fading',
        'ball-fountain',
        'ball-interwind',
        'ball-line',
        'ball-mini',
        'ball-planets',
        'ball-spinner-double',
        'ball-spinner',
        'ball-triangle',
        'bars-music',
        'bars-trespassing',
        'bars',
        'circles-spinner',
        'circles',
        'clock',
        'dots-triple',
        'drops-fading',
        'eclipse',
        'flickr',
        'gear',
        'grid',
        'oval',
        'pendulum',
        'ring-broken',
        'ring-double',
        'ring-dual',
        'ripple-inbound',
        'ripple',
        'rolling-short',
        'rolling',
        'segments',
        'snake-chasing',
        'snake-full',
        'snake-solid',
        'tail-spin',
        'triangle-spin-triple',
        'twirl',
        'typing',
    ]
}