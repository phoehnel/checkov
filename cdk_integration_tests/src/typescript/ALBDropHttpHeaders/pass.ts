import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_elasticloadbalancingv2 as elbv2 } from 'aws-cdk-lib';

class ALBDropHttpHeadersStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        new elbv2.CfnLoadBalancer(this, { type: 'application', loadBalancerAttributes: [{'key': 'routing.http.drop_invalid_header_fields.enabled', 'value': 'true'}] })
        new elbv2.CfnLoadBalancer(this, { type: 'application', loadBalancerAttributes: [{'value': 'true', 'key': 'routing.http.drop_invalid_header_fields.enabled'}] })
        new elbv2.CfnLoadBalancer(this, { loadBalancerAttributes: [{'key': 'routing.http.drop_invalid_header_fields.enabled', 'value': 'true'}], type: 'application' })
        new elbv2.CfnLoadBalancer(this, { loadBalancerAttributes: [{'value': 'true', 'key': 'routing.http.drop_invalid_header_fields.enabled'}], type: 'application' })
    }
}

const app = new App();
new ALBDropHttpHeadersStack(app, 'ALBDropHttpHeadersStack');
