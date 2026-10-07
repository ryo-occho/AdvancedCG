#version 130

in vec4 vertexPosition;
in vec3 vertexNormal;

out vec3 vWorldEyeDir;
out vec3 vWorldNormal;

uniform mat4 projModelViewMatrix;
uniform vec3 eye;

void main()
{
	vWorldEyeDir = vertexPosition.xyz - eye;
	vWorldNormal = vertexNormal;
	gl_Position = projModelViewMatrix * vertexPosition;
}
