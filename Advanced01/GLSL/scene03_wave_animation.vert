#version 130

in vec4 vertexPosition;

uniform float temporalSignal;
uniform mat4 projModelViewMatrix;

void main()
{
	vec4 animatedPosition = vertexPosition;
	float waveX = sin(vertexPosition.x * 1.5 + temporalSignal * 5.0);
	float waveZ = cos(vertexPosition.z * 1.5 + temporalSignal * 4.0);
	animatedPosition.y = 0.25 * (waveX + waveZ);

	gl_Position = projModelViewMatrix * animatedPosition;
}
