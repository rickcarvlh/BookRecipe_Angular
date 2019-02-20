import {Directive, HostBinding, HostListener} from "@angular/core";
// custom directive for the dropdown work using a bootstrap class
// it needs to be in the header html and in the recipe detail html for for both dropdown to work

@Directive({
  selector: '[appDropDown]'
})
export class DropdownDirective {
   // open is a css class
   @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }
}
