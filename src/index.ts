import { Template, CompileOption } from "whatstpl";
import { TemplateEngine, TemplateOptions } from "sfn";

export interface WhatstplOptions extends TemplateOptions {
    /** Whether or not to remove the comments when ernder HTML. */
    removeComments?: boolean;
    /**
     * Used when the program is run in a browser and load remote template via 
     * Ajax.
     */
    timeout?: number;
}

export class WhatstplEngine extends TemplateEngine {
    options: WhatstplOptions;

    renderFile(filename: string, vars: { [name: string]: any } = {}): Promise<string> {
        return Template.renderFile(filename, vars, this.options);
    }
}