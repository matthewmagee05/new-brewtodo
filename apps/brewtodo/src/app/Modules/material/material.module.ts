import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
    declarations: [],
    imports: [CommonModule, MatSelectModule, MatButtonModule, MatIconModule],
    exports: [MatSelectModule, MatButtonModule, MatIconModule],
})
export class MaterialModule {}
