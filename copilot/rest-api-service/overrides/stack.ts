import * as cdk from 'aws-cdk-lib';
import * as path from 'path';
// import { aws_elasticloadbalancingv2 as elbv2 } from 'aws-cdk-lib';

interface TransformedStackProps extends cdk.StackProps {
    readonly appName: string;
    readonly envName: string;
}

export class TransformedStack extends cdk.Stack {
    public readonly template: cdk.cloudformation_include.CfnInclude;
    public readonly appName: string;
    public readonly envName: string;

    constructor (scope: cdk.App, id: string, props: TransformedStackProps) {
        super(scope, id, props);
        this.template = new cdk.cloudformation_include.CfnInclude(this, 'Template', {
            templateFile: path.join('.build', 'in.yml'),
        });
        this.appName = props.appName;
        this.envName = props.envName;
        // this.transformHTTPListenerRule();
    }
    
    // // TODO: implement me.
    // transformHTTPListenerRule() {
    //     const httplistenerRule = this.template.getResource("HTTPListenerRule") as elbv2.CfnListenerRule;

    //     if (this.envName === 'dev') {
    //         httplistenerRule.listenerArn = "arn:aws:elasticloadbalancing:us-west-2:596912130800:loadbalancer/app/applic-Publi-A9hOIS8OkAxY/22e5c12761d98026";
    //     }
    // }
    
}