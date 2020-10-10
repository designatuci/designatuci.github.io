const VertexShaderText = `
precision mediump float;

uniform float aspectRatio;

attribute vec2 vertex;
varying vec2 uv;

uniform float time;
varying float T;

void main() {
    T = time;
    uv = vertex;
    uv.y *= aspectRatio;
    uv *= smoothstep(2.0,1.0,aspectRatio*1.6)*0.9+1.0;
    gl_Position = vec4(vertex, 0.0, 1);
}
`
const FragmentShaderText = `
precision mediump float;
varying vec2 uv;
varying float T;
const float pi = 3.1415926535897932384626433832795;

float circle(vec2 p, float radius, float period, float shift) {
    p.x += cos(period)*shift;
    p.y += sin(period)*shift;
    return smoothstep(radius+0.012,radius-0.012,length(p));
}

vec3 colorBurn(vec3 a, vec3 b) {
    vec3 invb = 1.0-b;
    vec3 inva = vec3(1.0) / a;
    return (vec3(1.0)-(invb*(inva)));
}
 
float blendColorBurn(float base, float blend) {
	return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);
}

vec3 blendColorBurn(vec3 base, vec3 blend) {
	return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));
}

void main() {


    float intro = T*0.06;
    if (intro<1.0)    intro = smoothstep(1.0,0.0,pow(1.0-intro,4.0));
    else                intro = 1.0;
    
    float Ts = intro*pi*2.0;
    float Tp = sin(T*0.4)*0.5+0.5;
    vec2 p = vec2 ( uv.x*cos(Ts)-uv.y*sin(Ts),
                    uv.x*sin(Ts)+uv.y*cos(Ts));
    p *= intro*0.6 + 0.2;
    vec3 c = vec3( 1.0, 1.0, 1.0 );

    // Iterate through petals
    for (float i = 0.0; i < pi*1.9; i += pi*0.33333333) {

        float m = circle(p,                             // Position
                         -0.05 + intro*0.55 + 0.09*Tp,  // radius
                         i,                  // Period
                         -0.3 + 0.52*intro + 0.04*-Tp);   // Shift
        float ci = i;
        vec3 colora = vec3( 0.0 , 0.6, 1.0);
        vec3 colorb = vec3( 1.0, 0.23, 0.57);
        // vec3 colorc = vec3( 1.0, 0.77, 0.31);
        vec3 color = mix(colora,colorb,sin(-T*0.33+p.y*2.4+p.x+intro*18.0+i*0.33)*0.5+0.5);

        c = mix( c, pow(color,vec3(1.8)), m*0.3 );

    }

    // float m = circle(p, 0.5, 0.0, 0.0);
    // c = mix( c, vec3(0.2,0.0,1.0), m );

    gl_FragColor = vec4(c, 1);

}
`