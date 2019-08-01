import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';

@Component({
    selector: 'app-showcase',
    templateUrl: './showcase.component.html',
    styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
    config;
    configBtn: any = {
        background: '#18CE0F'
    };
    toggle = true;
    loader = true;
    toggleInputs() {
        this.loader = this.toggle;
    }

    constructor(private configService: ConfigurationService) { }

    ngOnInit() {
        this.configService.updateConfig.subscribe((config: any) => {
            this.loader = false;
            this.config = { ...config };
            this.configBtn = { ...config };
            this.configBtn.background = '#18CE0F'
            this.config.padding += 'px';
            this.configBtn.padding += 'px';
            setTimeout(() => {
                if (this.toggle) {
                    this.loader = true;
                }
            }, 0)
        });
    }

}