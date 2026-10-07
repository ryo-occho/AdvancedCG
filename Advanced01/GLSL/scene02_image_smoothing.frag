#version 130

in vec2 outTexCoord;
out vec4 fragColor;

uniform sampler2D tex;
uniform int halfKernelSize;
uniform float uScale;
uniform float vScale;

void main()
{
	if (halfKernelSize == 0)
	{
		fragColor = texture2D(tex, outTexCoord);
		return;
	}

	vec4 colorSum = vec4(0.0);
	float weightSum = 0.0;
	float kernelRadius = float(halfKernelSize);

	for (int y = -halfKernelSize; y <= halfKernelSize; ++y)
	{
		for (int x = -halfKernelSize; x <= halfKernelSize; ++x)
		{
			vec2 normalizedOffset = vec2(float(x), float(y)) / kernelRadius;
			float weight = exp(-dot(normalizedOffset, normalizedOffset) / (0.5 * 0.5));
			vec2 texelOffset = vec2(float(x) * uScale, float(y) * vScale);

			colorSum += texture2D(tex, outTexCoord + texelOffset) * weight;
			weightSum += weight;
		}
	}

	fragColor = colorSum / weightSum;
}
