#version 130

in vec2 outTexCoord;
out vec4 fragColor;

uniform vec4 checkerColor0;
uniform vec4 checkerColor1;
uniform vec2 checkerScale;

void main()
{
	vec2 checkerCoord = fract(outTexCoord / checkerScale);
	bool sameHalf = (checkerCoord.s <= 0.5 && checkerCoord.t <= 0.5)
		|| (checkerCoord.s > 0.5 && checkerCoord.t > 0.5);
	fragColor = sameHalf ? checkerColor0 : checkerColor1;
}
